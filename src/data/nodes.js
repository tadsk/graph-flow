const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Alert notifications' },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      data: { label: <div>Incorrect Notification message received</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      data: { label: "I'm not receiving any notifications" },
      position: { x: 300, y: 125 },
    },
    {
        id: '4',
        data: { label: "Register Notifications" },
        position: { x: 150, y: 225 },
    },
    {
        id: '5',
        data: { label: "I'd like to unsubscribe from notifications" },
        position: { x: 250, y: 335 },
    },
    {
        id: '6',
        type: 'output',
        data: { label: "Unsubscribe from text" },
        position: { x: 150, y: 410 },
    },
    {
        id: '7',
        type: 'output',
        data: { label: "Unsubscribe from email" },
        position: { x: 330, y: 410},
    },
    { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
  ];

export default initialNodes;