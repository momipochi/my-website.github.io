import { useState } from "react";
import chrobcss from "../assets/styles/chrobinsontask.module.css";

function CHRobinsonTask() {
    const [closestPath,setClosestPath] = useState(null);
    const listItems = closestPath === null ? "No path found":closestPath.map((d) => <li key={d.toString()}>{d}</li>);
    const handleOnChange = (e)=>{
        setClosestPath(findPath(e.target.value))
    }
  return (
    <div className={chrobcss.main}>
      <label htmlFor="dest">Destination</label><br/>
      <input type="text" id="destInput" onChange={handleOnChange}/>
      <p>{listItems}</p>
    </div>
  );
}
function Graph() {
  this.nodes = {};

  this.addEdge = (u, v) => {
    if (this.nodes[u] === undefined) {
      this.nodes[u] = [];
    }
    this.nodes[u].push(v);
  };
}
function shortestPath(graph, origin, destination) {
  if (origin == destination) {
    //if already at destination return origin
    return [origin];
  }
  var nodes = [origin],
    visited = new Map(),
    prevNodes = {};
  visited.set(origin, 1);
  while (nodes.length != 0) {
    let currNode = nodes.pop(); 
    let childrenNode = graph.nodes[currNode];
    for (let i = 0; i < childrenNode.length; i++) {
      //traverse child nodes of currNode

      if (visited.get(childrenNode[i]) == 1) {
        //continue if node has been visited already
        continue;
      }
      visited.set(childrenNode[i], 1); //otherwise mark the unvisited child node as visited

      if (childrenNode[i] === destination) {
        let path = [childrenNode[i]];

        while (currNode != origin) {
          //backtracking
          path.push(currNode);
          currNode = prevNodes[currNode];
        }
        path.push(currNode);
        path.reverse(); //list is in opposite order since the implementation is not recursive
        return path;
      }

      prevNodes[childrenNode[i]] = currNode;
      nodes.push(childrenNode[i]);
    }
  }
}

function findPath(dest) {
  var graph = new Graph();
  graph.addEdge("CAN", "USA");
  graph.addEdge("USA", "CAN");
  graph.addEdge("USA", "MEX");
  graph.addEdge("MEX", "USA");
  graph.addEdge("MEX", "BLZ");
  graph.addEdge("MEX", "GTM");
  graph.addEdge("BLZ", "MEX");
  graph.addEdge("BLZ", "GTM");
  graph.addEdge("GTM", "MEX");
  graph.addEdge("GTM", "BLZ");
  graph.addEdge("GTM", "SLZ");
  graph.addEdge("GTM", "HND");
  graph.addEdge("SLV", "GTM");
  graph.addEdge("SLV", "HND");
  graph.addEdge("HND", "SLV");
  graph.addEdge("HND", "GTM");
  graph.addEdge("HND", "NIC");
  graph.addEdge("NIC", "HND");
  graph.addEdge("NIC", "CRI");
  graph.addEdge("CRI", "NIC");
  graph.addEdge("CRI", "PAN");
  graph.addEdge("PAN", "CRI");

  dest = dest.toUpperCase();
  if (graph.nodes[dest] != undefined) {
    
    let spath = shortestPath(graph, "CAN", dest);
    return spath
    // let div = document.getElementById("path");
    // div.innerHTML = "";
    // // div.innerHTML = spath.join(" -> ")
    // for (let i = 1; i < spath.length; i++) {
    //   let entry = document.createElement("li");
    //   entry.innerHTML = spath[i];
    //   div.appendChild(entry);
    // }
  }
  return null
}

export default CHRobinsonTask;
