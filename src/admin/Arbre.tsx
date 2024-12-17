import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, Button } from 'reactstrap';
import myImage from "../Image/iconUpdate.svg";
import './Arbre.css';

interface TreeNode {
  [key: string]: any;
}

interface TreeViewProps {
  treeData: TreeNode;
  setTreeData:Function
  depth?: number; // Optional: Controls the indentation for nested levels
}

const AppTest: React.FC<TreeViewProps> = ({ treeData, depth = 0  , setTreeData}) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
 
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>('');
  const [currentValue, setCurrentValue] = useState<string>('');

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleValueChange = (key: string, newValue: any) => {
    setTreeData((prevData:any) => {
      const updatedData = { ...prevData };
      const keys = key.split('-');

      let currentData = updatedData;
      keys.forEach((part, index) => {
        if (!currentData || !(part in currentData)) {
          console.error(`Invalid key path at part ${index}: ${part}`);
          return; // If the path doesn't exist, stop the update
        }

        if (index === keys.length - 1) {
          currentData[part] = newValue; // Update the value at the deepest key
        } else {
          currentData = currentData[part]; // Move deeper into the tree
        }
      });

      return updatedData;
    });
  };

  const renderTree = (node: TreeNode, keyPrefix = '') => {
    if (typeof node === 'string' || typeof node === 'number') {
      return (
        <span className="tree-leaf">
          {node}
          <button
            className="edit-button"
            onClick={() => handleEditValue(keyPrefix, node)}
          >
           <img src={myImage} alt="Description de l'image" /> {/* Replace with your image path */}
          </button>
        </span>
      );
    }

    if (Array.isArray(node)) {
      return (
        <ul>
          {node.map((item, index) => (
            <li key={`${keyPrefix}-${index}`}>
              {renderTree(item, `${keyPrefix}-${index}`)}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul>
        {Object.entries(node).map(([key, value]) => (
          <li key={`${keyPrefix}-${key}`} className="tree-node">
            <div
              className={`tree-header ${expanded[key] ? 'expanded' : ''}`}
              onClick={() => toggleExpand(`${keyPrefix}-${key}`)}
            >
              {typeof value === 'object' ? (
                <span className="tree-toggler">{expanded[`${keyPrefix}-${key}`] ? '-' : '+'}</span>
              ) : null}
              <span className="tree-key">{key}:</span>
            </div>
            {expanded[`${keyPrefix}-${key}`] && (
              <div className="tree-children">{renderTree(value, `${keyPrefix}-${key}`)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const handleEditValue = (key: string, value: any) => {
    setCurrentKey(key);
    setCurrentValue(value);
    setModalOpen(true); // Open the modal to edit the value
  };

  const handleSaveChanges = () => {
    handleValueChange(currentKey, currentValue);
    setModalOpen(false); // Close the modal after saving changes
  };

  const handleCancelChanges = () => {
    setModalOpen(false); // Close the modal without saving
  };

  return (
    <div className="tree-container">
      {renderTree(treeData)}
      
      {/* Modal for editing values */}
      <Modal isOpen={modalOpen} toggle={handleCancelChanges}>
        <ModalHeader toggle={handleCancelChanges}>Edit Value</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
          <Button color="primary my-2 mx-2" onClick={handleSaveChanges}>Save</Button>{' '}
          <Button color="secondary" onClick={handleCancelChanges}>Cancel</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AppTest;







/* CSS (App.css) */
