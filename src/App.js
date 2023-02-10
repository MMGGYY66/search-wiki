import ReactAutocomplete from 'react-autocomplete';

function App() {
  return (
    <ReactAutocomplete
      items={[
        { id: 'foo', label: 'foo' },
        { id: 'bar', label: 'bar' },
        { id: 'baz', label: 'baz' },
      ]}
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.label}
      renderItem={(item, highlighted) =>
        <div
          key={item.id}
          style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
        >
          {item.label}
        </div>
      }
      value={this.state.value}
      onChange={e => this.setState({ value: e.target.value })}
      onSelect={value => this.setState({ value })}
    />
  )
}


export default App;
