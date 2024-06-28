

const Table = ({ data, handleAddingRow }) => {


    

return (
    <div>
      <button type="button" onClick={handleAddingRow}>Add One Row</button>
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.rollNumber}>
              <td>{item.rollNumber}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;

