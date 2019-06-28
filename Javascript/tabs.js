
class TabLink {
    constructor(element) {
      // Assign this.element to the passed in DOM element
      this.element = element;
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      console.log(this.data);
      // Using the custom data attribute get the associated Item element
      this.itemElement = this.data;
      console.log(this.itemElement);
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', ()=>{ this.select() });
    };
    
    select() {
      // console.log(`inTheSelectMethod for ${this.itemElement}`);
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
      
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach(e => {
        e.classList.remove('tabs-link-selected');
      });
      
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
      console.log(this.tabItem);
    }
  }
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    }
    
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
      
      // Remove the class "tabs-item-selected" from each element
      items.forEach(e => e.classList.remove('tabs-item-selected'));
      // Add a class named "tabs-item-selected" to this element
      items[this.element-1].classList.add('tabs-item-selected');
      console.log(items[this.element-1]);
    }
  }
  
  links = document.querySelectorAll(".tabs-link");
  links.forEach(element => {
    element = new TabLink(element);
  });