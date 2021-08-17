import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import TemplatePage from './TemplatePage'

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TemplatePage />      
      </ErrorBoundary>

    </div>
  );
}

export default App;
