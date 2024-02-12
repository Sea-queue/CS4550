import { isObjectLiteralElement } from "typescript";

function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.34;
  let stringVariable = "hello";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;

  return (
    <div>
      <h2>Variables Types</h2>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable} <br />
      {/* had to conver the boolean variable inot a string type */}
      booleanVariable = {booleanVariable + ""} <br />
      isNumber = {isNumber} <br />
      isString = {isString} <br />
      isBoolean = {isBoolean}
    </div>
  );
}

export default VariableTypes;
