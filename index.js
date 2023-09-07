const http = require('http');
const port = 3001;

const data=[
  {
    "name":"sumit rawat",
    "batch":"Eac0 21",
    "job":"developers",
  },
  {
    "name":"keshav rawat",
    "batch":"Eac0 21",
    "job":"java",
  },
  {
    "name":"shivani rawat",
    "batch":"Eac0 21",
    "job":"mern",
  },
  {
    "name":"nitin rawat",
    "batch":"Eac0 21",
    "job":"php",
  },
  {
    "name":"amisha rawat",
    "batch":"Eac0 21",
    "job":"wordpreess",
  },
  {
    "name":"karan rawat",
    "batch":"Eac0 21",
    "job":"bcom",
  },
  {
    "name":"rawat rawat",
    "batch":"Eac0 21",
    "job":"bcom",
  },
  {
    "name":"rawat rawat",
    "batch":"Eac0 21",
    "job":"bcom",
  }
]

const app = http.createServer((request, response) => {
  if (request.url === '/contactpage') {
    response.write('contact page');
    response.end();
  } else if (request.url === '/aboutus') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<html>');
    response.write('<head><title>About Us</title></head>');
    response.write('<body>');
    response.write('<h1>This is  About Us page</h1>');
    response.write('<p>Hey, my name is Sumit Rawat, and i am from uttrakhand .</p>');
    response.write('</body>');
    response.write('</html>');
    response.end();
  }
  else if(request.url==='/apifetch')
  {
    const data1=JSON.stringify(data)
    response.write(data1)
    response.end()
  }
   else {
    response.write('home page');
    response.end();
  }
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});
