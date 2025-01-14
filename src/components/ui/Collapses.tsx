"use client";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import React from "react";

function Collapses({ getItems }: { getItems: any }) {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      accordion
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
    />
  );
}

export default Collapses;
