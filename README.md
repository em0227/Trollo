![alt text](https://github.com/em0227/Trollo/blob/main/app/assets/images/purple_logo.png?raw=true)

## Introduction

---

Welcome to the Trollo! Manage your tasks and collaborate with your team with cute little trolls. Reach new productivity peaks with cheerful and colorful trolls who will keep track of your work! Inspired by both Trello and the movie Trolls (I encourage you to checkout both if you don't know about them!)

live site [HERE](https://trollo-manage-team-with-trolls.herokuapp.com/#/)!

Similar to Trello, user can create boards for their projects, invite team to be on board, and add lists of todos and other tasks. Under the list, you may add card and assign work to whoever is on board, and add due dates and comments on the card.

## Technologies

---

- React & Redux
- Ruby on Rails
- Javascript
- SCSS

## Key Feature

---

### Drag and drop cards and lists

---

drag and drop is a common feature you see on all kinds of sites, but I didn't realize it's actually not easy to implement it. The frontend challenges are to precisely know which card/list is dragged and dropped to where, and send the updated order to backend so the state persist even after users refresh the page. In order to keep track of the movements, I made each card index in a list structure like a node tree, each card contains a predecessor id, so it knows who to go after.

```ruby
def assign_order
    list = self.list
    cards_in_list = list.cards
    if cards_in_list == []
        self.update(predecessor_id: 0)
    else
        self.update(predecessor_id: list.cards.last.id)
    end
    return self.predecessor_id
end
```

Everytime a card switches position in the list, it will update its predecessor id. I also use sorting algorithm to order the cards based on their predecessor id so it will render the right order on page.

![alt text](https://github.com/em0227/Trollo/blob/main/app/assets/images/drag-and-drop.gif?raw=true))

### Search users and invite them to be on board

---

Using the technique of debounce, the search will only fire a HTTP request after the user finish typing. Thus reduces the number of API calls sent to server and is optimized for growth of user size.

```js
handleSearch(e) {
    this.setState({
      search: e.target.value,
    });
    this.debounce();
  }

  debounce() {
    let { timerId, search } = this.state;
    const { matchedUsers } = this.props;

    clearTimeout(timerId);
    timerId = setTimeout(() => matchedUsers(search), 200);
    this.setState({ timerId });
  }

```

### Polymorphic association for sharing

As user can either share a board or a card, creating a polymorphic tables make senses and will be easier to manage associations going further.

---

```ruby
class Share < ApplicationRecord
    validates :user_id, exclusion: { in: -> (share) {[share.shareable.author.id]}, message: "can't invite themselves"}
    belongs_to :shareable, polymorphic: true
    belongs_to :user
end
```

---

Still in process to make the site better with notification features and teamwork data visualization. Stay tuned with my Github and Linkedin for progress!

[LinkedIn](https://www.linkedin.com/in/emilyawu/)

Thank You!
