// eslint-disable-file no-use-before-define 
function App() {
    return (
      <h>
        Write your statement here
      </h>
    );
  }
  
  test('App renders the correct text', () => {
    const { getByText } = render(<App />);
    expect(getByText('Write your statement here')).toBeTruthy();
  });