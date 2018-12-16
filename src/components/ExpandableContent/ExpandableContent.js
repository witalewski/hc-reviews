import React from "react";
import { connect } from "react-redux";

import { expandText } from "../../state/actions/uiActions";

import { ExpandableContentStyled } from "./ExpandableContentStyled";

export const ExpandableContent = ({
  id,
  body,
  className,
  children,
  ui,
  expandText
}) => {
  const { isTextExpanded } = ui[id];
  return (
    <ExpandableContentStyled
      className={`${className} ${!isTextExpanded ? "collapsed" : ""}`}
      onClick={() => expandText(id)}
    >
      {body.map(line => (
        <p className="paragraph">{line}</p>
      ))}
      {children}
      {!isTextExpanded && <p className="fade-out" />}
    </ExpandableContentStyled>
  );
};

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = {
  expandText
};

export const ExpandableContentConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpandableContent);
