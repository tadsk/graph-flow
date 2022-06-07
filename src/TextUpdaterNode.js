import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyleLeft = { left: 10 };
const handleStyleRight = { right: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">What issue are you reporting?</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyleLeft} />
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
}

export default TextUpdaterNode;