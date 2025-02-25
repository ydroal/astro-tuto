import Card from './Card.jsx';

export default function CardList() {
  const cardData = [
    { title: 'Life Style', imageUrl: '/assets/lifestyle.jpg', link: '/blog/lifestyle' },
    { title: 'Family', imageUrl: '/assets/family.jpg', link: '/blog/family' },
    { title: 'Food', imageUrl: '/assets/food.jpg', link: '/blog/food' },
  ];

  return (
    <section id="blog" className="mt-6">
      <div className="grid gap-[4.5rem] grid-cols-1 md:grid-cols-3">
          {cardData.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              imageUrl={item.imageUrl}
              link={item.link}
            />
          ))}
        </div>
    </section>
  );
}