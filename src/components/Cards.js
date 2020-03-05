import React from "react";
import Card from "./Card";
let id = 0;
let data = [
  {
    name: "Datawaves",
    description: "Add analytics to anything",
    tags: ["ANALYTICS", "DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
    count: 0,
    id: id++
  },
  {
    name: "Makerlog 3.0",
    description: "The productive community for makers and indie hackers. ",
    tags: ["PRODUCTIVITY", "DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
    count: 0,
    id: id++
  },
  {
    name: "Flutter Dating",
    description: "The live Sunday dating app",
    tags: ["IPHONE", "DATING"],
    img:
      "https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
    count: 0,
    id: id++
  },
  {
    name: "Adriel",
    description: "Add analytics to anything",
    tags: ["ANALYTICS", "DEVELOPER TOOLS"],
    img:
      "https://ph-files.imgix.net/a0404b9d-6849-4ff5-acb7-cde92d5465d8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
    count: 0,
    id: id++
  },
  {
    name: "Mailbrew",
    description: "Automated email digests from Twitter, Reddit, YouTube & more",
    tags: ["EMAIL", "PRODUCTIVITY"],
    img:
      "https://ph-files.imgix.net/f64667ec-0201-4f20-9a03-161ab227a936?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
    count: 0,
    id: id++
  }
];
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  updateCount = id => {
    let updatedData = this.state.data.map(p => {
      if (p.id === id) {
        p.count = p.count + 1;
      }
      return p;
    });
    this.setState({ data: updatedData });
  };
  render() {
    return this.state.data.map(product => (
      <Card {...product} updateCount={this.updateCount} />
    ));
  }
}

export default Cards;
