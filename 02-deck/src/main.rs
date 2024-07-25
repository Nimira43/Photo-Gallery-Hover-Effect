struct Deck {
  cards: Vec<String>,
}

fn main() {
  let deck = Deck { cards: vec![]  }; 
  println!("Heres you desk: {:?}", deck);
}