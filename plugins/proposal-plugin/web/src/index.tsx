import React from 'react';
import ReactDOM from 'react-dom';
import { reactBridge } from '@garfish/bridge-react';
import RootComponent from './root';
import ErrorBoundary from './ErrorBoundary';

// 在首次加载和执行时会触发该函数
// export const provider = (props) => {
//   const root = props.dom
//     ? props.dom.querySelector("#root")
//     : document.querySelector("#root");

//   return {
//     render() {
//       ReactDOM.render(<RootComponent {...props} />, root);
//     },
//     destroy({ dom }) {
//       ReactDOM.unmountComponentAtNode(
//         dom ? dom.querySelector("#root") : document.querySelector("#root")
//       );
//     },
//   };
// };

export const provider = reactBridge({
  el: '#root',
  rootComponent: RootComponent,
  errorBoundary: () => <ErrorBoundary />,
});

// 这能够让子应用独立运行起来，以保证后续子应用能脱离主应用独立运行，方便调试、开发
if (!window.__GARFISH__) {
  ReactDOM.render(
    <RootComponent
      basename={
        process.env.NODE_ENV === 'production' ? '/examples/subapp/react16' : '/'
      }
    />,
    document.querySelector('#root'),
  );
}
