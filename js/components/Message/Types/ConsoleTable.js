import React, { PropTypes } from "react";
import MessageBody from "../MessageBody";
import MessageLocation from "../MessageLocation";
import BodyPieces from "../BodyPieces";
import MessageStacktrace from "../MessageStacktrace";

ConsoleTable.propTypes = {
  message: PropTypes.shape({
  }).isRequired,
}

function ConsoleTable(props) {
  // @TODO do service messages get repeated?
  let errorMessage = props.message.errorMessage;
  return (
    <MessageBody message={props.message} isFlexed>
      <span class="cm-variable">console</span>.<span class="cm-property">table</span>():
    </MessageBody>
  );
}

export default ConsoleTable;
