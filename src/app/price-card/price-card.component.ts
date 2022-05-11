import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {

  features = [
    {
      type: "FREE",
      price: "$0",
      feature: [
        { title: "Single User" },
        { title: "5GB Storage" },
        { title: "Unlimited Public Projects" },
        { title: "Community Access" },
        { title: "Unlimited Private Projects" },
        { title: "Dedicated Phone Support" },
        { title: "Free Subdomain" },
        { title: "Monthly Status Reports"}
      ]
    },
    {
      type: "PLUS",
      price: "$9",
      feature: [
        { title: "5 User" },
        { title: "50GB Storage" },
        { title: "Unlimited Public Projects" },
        { title: "Community Access" },
        { title: "Unlimited Private Projects" },
        { title: "Dedicated Phone Support" },
        { title: "Free Subdomain" },
        { title: "Monthly Status Reports" }
      ]
    },
    {
      type: "PRO",
      price: "$49",
      feature: [
        { title: "Unlimited User" },
        { title: "150GB Storage" },
        { title: "Unlimited Public Projects" },
        { title: "Community Access" },
        { title: "Unlimited Private Projects" },
        { title: "Dedicated Phone Support" },
        { title: "Umlimited Free Subdomain" },
        { title: "Monthly Status Reports" }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
