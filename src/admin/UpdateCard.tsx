import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import myImage from "../Image/iconUpdate.svg";

import "./Sidebar.css";
import ModalUpdate from "./ModalUpdate";
import { useDispatch } from "react-redux";
import { setData } from "../features/dataSlice";
import { structureData1 } from "../Constant/data";
import AppTest from "./Arbre";

interface TreeNode {
  [key: string]: any;
}

export default function UpdateCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [treeData, setTreeData] = useState<TreeNode>(structureData1.text);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const dispatch = useDispatch();

  // Fonction de recherche récursive
  const searchInData = (treeData: any, keyword: string): string[] => {
    const matches: string[] = [];
    for (const key in treeData) {
      const value = treeData[key];
      if (
        typeof value === "string" &&
        value.toLowerCase().includes(keyword.toLowerCase())
      ) {
        matches.push(key);
      } else if (typeof value === "object" && value !== null) {
        const nestedMatches = searchInData(value, keyword);
        if (nestedMatches.length > 0) {
          matches.push(key);
        }
      }
    }
    return matches;
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.trim() === "") {
      setResults([]);
      return;
    }
    const found = searchInData(treeData, newQuery);
    setResults(found);
  };

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://backandstedy-29.onrender.com/api/v1/getTreeAdmin"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawData = await response.text();
        const data = JSON.parse(rawData);

        if (Object.keys(data.text).length !== 0) {
          setTreeData(data.text);
        }
        dispatch(setData(structuredClone(data.text)));
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Barre de recherche */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleQueryChange}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Résultats */}
      <div style={{ marginBottom: "20px" }}>
        {results.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map((result, index) => (
              <li
                key={index}
                style={{
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  marginBottom: "5px",
                  borderRadius: "5px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                Index: {result}
              </li>
            ))}
          </ul>
        ) : (
          query && <p>No results found.</p>
        )}
      </div>

      {/* Data Tree View */}
      <div
        style={{
          borderBottom: "2px solid #ccc",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "20px", color: "#333" }}>Data Tree View</h2>
        <AppTest treeData={treeData} setTreeData={setTreeData} />
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          color="primary"
          style={{ padding: "10px 20px", borderRadius: "5px" }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Save
        </Button>

        <Button
          color="secondary"
          style={{ padding: "10px 20px", borderRadius: "5px" }}
        >
          Reset to Initial State
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <ModalUpdate
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          treeData={treeData}
        />
      )}
    </div>
  );
}
