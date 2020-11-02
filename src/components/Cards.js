import React from 'react';

class Cards extends React.Component {
  render() {
    let selection = this.props.selection;
    let key = 0;
    const renderedCards = departments[selection].map((card) => {
      key += 1;
      return (
        <div className="card" style={{ width: '18rem', margin: '10px' }} key={key}>
          <div className="card-body">
            <h4 className="card-dep">{card.dep}</h4>
            <h5 className="card-title">{card.title}</h5>
            <h5 className="card-name">{card.name}</h5>
          </div>
        </div>
      );
    });
    return <div className="flex-container">{renderedCards}</div>;
  }
}

const product = [
  {
    dep: 'Product & Data Science',
    title: 'VP of Technology',
    name: 'Sundeep Jain',
  },
  {
    dep: 'Payment (Uber Money)',
    title: 'Head',
    name: 'Peter Hazlehrst',
  },
  {
    dep: 'Product Design',
    title: 'VP',
    name: 'Michael Gough',
  },
  {
    dep: 'Global Scaled Solution',
    title: 'Director',
    name: 'Megha Yethadka',
  },
];

const technology = [
  {
    dep: 'Product Engineer',
    title: 'VP of Technology',
    name: 'Peeyush Nahar',
  },
  {
    dep: 'Mobility & Marketplace',
    title: 'Head',
    name: 'Gaurav Garg',
  },
  {
    dep: 'Product Platform (bussiness infrastructure)',
    title: 'Senior Director',
    name: 'Jennifer Anderson',
  },
  {
    dep: 'Infrastructure',
    title: 'Senior Director',
    name: 'Sumanth Sukumar',
  },
  {
    dep: 'Eats Engineering',
    title: 'Senior Director',
    name: 'Haider Sabri',
  },
  {
    dep: 'Technical Program Management & Learning',
    title: 'Senior Director',
    name: 'Sophia Vicent',
  },
  {
    dep: 'Information Technology',
    title: 'CIO',
    name: 'Shobhana Ahluwalla',
  },
];
const uberATG = [
  {
    dep: 'Software Engineering',
    title: 'VP',
    name: 'John Thomason',
  },
  {
    dep: 'Systems Engineering & Testing',
    title: 'Head',
    name: 'Adrian Thompson',
  },
  {
    dep: 'Hardware & Vehicle',
    title: 'Head',
    name: 'Stephen Lesh',
  },
  {
    dep: 'Supply Chain',
    title: 'Head',
    name: 'Sameer Kshirsagar',
  },
  {
    dep: 'Safety',
    title: 'Head',
    name: 'Nat Beuse',
  },
  {
    dep: 'Research & Development',
    title: 'Head',
    name: 'Raquel Urtasun',
  },
  {
    dep: 'Product & Design',
    title: 'Head',
    name: 'Eric Hanson',
  },
  {
    dep: 'Strategy',
    title: 'Head',
    name: 'Austin Geidt',
  },
];
const platform = [
  {
    dep: 'Uber Works',
    title: 'CEO',
    name: 'Andrey Liscovich',
  },
  {
    dep: 'Uber Transits',
    title: 'GM',
    name: 'David Reich',
  },
  {
    dep: 'Customer Engagement',
    title: 'Head',
    name: 'John Venuto',
  },
  {
    dep: 'Incubator',
    title: 'Head',
    name: 'Karishma Shah',
  },
];

const ceo = [
  {
    dep: 'Uber',
    title: 'CEO',
    name: 'Dara Khosrowshahi',
  },
];
var departments = { ceo: ceo, product: product, technology: technology, uberATG: uberATG, platform: platform };

export default Cards;
