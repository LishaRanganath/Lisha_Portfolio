import './Contact.css';

const contactItems = [
  {
    icon: 'https://img.icons8.com/bubbles/100/000000/phone.png',
    title: 'Phone',
    details: ['+1(425)-457-4752'],
    alt: 'phone icon',
  },
  {
    icon: 'https://img.icons8.com/bubbles/100/000000/new-post.png',
    title: 'Email',
    details: ['lishar2002@gmail.com'],
    alt: 'email icon',
  },
  {
    icon: 'https://img.icons8.com/bubbles/100/000000/map-marker.png',
    title: 'Address',
    details: [
      '15808 Bear Creek Pkwy, Redmond , WA - 98052',
    ],
    alt: 'address icon',
  },
];

function Contact() {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact-items">
          {contactItems.map((item, index) => (
            <div className="contact-item" key={index}>
              <div className="icon">
                <img src={item.icon} alt={item.alt} />
              </div>
              <div className="contact-info">
                <h1>{item.title}</h1>
                {item.details.map((detail, i) => (
                  <h2 key={i}>{detail}</h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
