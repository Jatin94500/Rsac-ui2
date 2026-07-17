const Rainfall = () => {
  const square = [
    { name: 'Max(mm)', score: 124.6, color: '#e74c3c' },
    { name: 'Min(mm)', score: 0.2, color: '#3498db' },
    { name: 'Mean(mm)', score: 24.8, color: '#2ecc71' },
    { name: 'Median(mm)', score: 18.7, color: '#f39c12' }
  ];

  return (
    <div className="border soild border-grey mt-4 rounded-xl">
      <h1 className="text-blue-800 font-medium whitespace-nowrap p-2">Rainfall Statistics(10 Jun 2025)</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} className="flex-1 p-2">
        {square.map((item) => (
          <div
            key={item.name}
            style={{
              border: `2px solid ${item.color}`,
              borderRadius: '8px',
              padding: '15px',
              minWidth: '120px',
              textAlign: 'center',
              backgroundColor: `${item.color}22`, // adds transparency for a subtle background
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: '14px', color: '#555' }}>{item.name}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: item.color }}>
              {item.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rainfall;