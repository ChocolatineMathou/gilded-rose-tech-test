# Gilded Rose Tech Test

## Intro

This project was made during the tech test week at Makers (week 10).  
It was built in Javascript and its testing framework Jasmine, using TDD and OOD.  
ESLint and Istanbul were used fromthe beginning to improvethe syntax and get the test coverage.  

First of all, I'd would like to specify why I choose this project. My [first tech test](https://github.com/ChocolatineMathou/bank-tech-test) gave me confidence to write a program from scratch in Ruby using TDD and OOD, which was a success. After Makers, I will probably join a company and work on legacy code and I'd like to make sure I'm able to do that. 

## User Stories

```
As a shop owner,
So that I can keep track of my stock,
I would like sell by date and quality updated automatically.

As a shop owner,
So that the quality is updated appropriately,
I would like the quality of all normal items to decrease by one everyday.

As a shop owner,
So that I don't keep expired items for too long on my shelf,
I would like the quality of all normal items to decrease by two after the sell   
by date has passed.

As a shop owner,
So that I don't poison a customer,
I would like the quality of an item to have a minimum of zero.

As a shop owner,
So that I provide good value to my customers,
I would like the quality of an item to have a maximum of fifty.

As a shop owner,
So that I can take advantage of some products,
I would like unique behaviour for specific items.

As a shop owner,
So that I can make more profit from "Aged Brie",
I would like its quality to increase by one everyday.

As a shop owner,
So that I can make more profit from "Backstage passes",
I would like their to increase as the sell by date approaches.

As a shop owner,
So that I can make more profit from "Sulfuras",
I would like its sell by date and its quality to remain the same.

As a shop owner,
So that I can take advantage of their short life,
I would like the quality of "Conjured items" to decrease twice as fast.

```

## Download and run project

## Approach

I started to list all the tools I wanted to use to make the code easy to read and change, and set up a clean repo with the legacy code.  
I also listed the expected [specifications](https://github.com/ChocolatineMathou/gilded-rose-tech-test#specification) to understand the purpose of the program (as the legacy code isn't easy to read), draw a very basic diagram to get an idea of the objects I may use and their interactions, wrote some [user stories](https://github.com/ChocolatineMathou/gilded-rose-tech-test#user-stories).  
I finally wrote tests before refactoring the codebase.

## Specification

You can find the brief [here](https://github.com/emilybache/GildedRose-Refactoring-Kata). This tech test aims to refactor a legacy code in the language of our choice - I choose Javascript.  
I translated the specification to make it clearer in my head, as follows:  

- Everyday, quality and sell by date values decrease by 1
- When sell by date < 0, quality value decreases by 2
- Quality value cannot be more than 50 and less then 0
- Exceptions:  
	- "Aged Brie": when sell by date value decreases, quality value increases
	- "Backstage passes":  
		- when 5 < sell by date <= 10, quality value increases by 2
		- when 0 < sell by date <= 5, quality value incrases by 3
		- when sell by date <= 0, quality value drops to 0
	- "Sulfuros" doesn't have sell by date and its quality values remain the same
	- "Conjured items": sell by date value decreases by 1 while quality value decreases by 2 everyday