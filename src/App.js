import React from 'react';
import AppContent from './components/PageContent';
import AppHeader from './components/PageHeader';
import PageTitle from './components/PageTitle';



function App() {
  return (
    <>
      <div className="container">
       <PageTitle />
        <div >
          <AppHeader />
          <AppContent />
        </div>
      </div>
     
   
    </>
  );
}

export default App;

