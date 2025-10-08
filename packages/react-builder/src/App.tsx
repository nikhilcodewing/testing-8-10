import { BlockEditorProvider, BlockCanvas, BlockList, BlockInspector } from "@wordpress/block-editor";

//main App component
const App = () => {
  return (<>
    Hello World
    <BlockEditorProvider height="100%" >
      <BlockCanvas>
            <BlockInspector />
            <BlockList />
      </BlockCanvas>
    </BlockEditorProvider>
  </>
  );
};

export default App;
