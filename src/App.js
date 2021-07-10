import Header from './components/Header'

function App() {
  return (
    <div className="main-bg">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-4">
          <div className="to-do-list-container">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
