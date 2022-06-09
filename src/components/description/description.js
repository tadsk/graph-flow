import './description.css';

function Description() {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return <div className="descriptionArea"> 
    <h2>Troubleshoot Flowchart</h2>
    <h4>Updating Edges</h4>
    Update edges by clicking on the edge and dragging the connection to another node. Also able to create connections by clicking two endpoints to connect
    <h4>Deleting Elements</h4>
    Delete nodes or connections by selecitng the desired element and pressing the delete key
    <aside>
      <div className="description">You can drag these nodes to the pane below</div>
      <div className="dndnode textUpdater" onDragStart={(event) => onDragStart(event, 'textUpdater')} draggable>
        Issue input field
      </div>
      <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Default Node
      </div>
    </aside>
  </div>
}

export default Description;