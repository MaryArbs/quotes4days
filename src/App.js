import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from './QuotesDatabase'
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }