import React from "react"
import { SmileOutlined } from "@ant-design/icons"

export default function Header() {
  return (
    <>
      <h1 style={{ display: "inline" }}>Hello</h1>
      <SmileOutlined
        style={{
          width: "16px",
          height: "20px",
          color: "#08c",
          display: "inline",
        }}
      />
    </>
  )
}
