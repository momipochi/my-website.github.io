import { Graph, shortestPath, findPath } from "../CHRobinsonTask.js";

const criTest = ['CAN', 'USA', 'MEX', 'GTM', 'HND', 'NIC', 'CRI']
const mexTest = ['CAN', 'USA', 'MEX']

it('Shortest Path',()=>{
    expect(findPath('cri')).toEqual(criTest)
    expect(findPath('mex')).toEqual(mexTest)
})