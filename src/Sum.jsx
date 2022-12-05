import React from 'react'

export default function Sum({ numbers = [12, 32, 32, 21, 423, 21] }) {
  return <h1>{numbers.reduce((a, b) => a + b)}</h1>;
}
