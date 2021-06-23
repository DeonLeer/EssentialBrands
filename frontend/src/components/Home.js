import React from 'react'
export default function Home(props) {
  return (
    <div className="Home" style={{height: '100%'}}>
      <div>
        <h1>Research-Based</h1>
        <h1>Natural CBD Products</h1>
      </div>
      <div className="content" style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        height: "100%"
        }}>
        <div className="content-box" style={{backgroundColor: "grey"}}>
          <h2>content</h2>
        </div>
        <div className="content-box" style={{backgroundColor: "grey"}}>
          <h2>content</h2>
        </div>
        <div className="content-box" style={{backgroundColor: "grey"}}>
          <h2>content</h2>
        </div>
      </div>

    </div>
  )
}