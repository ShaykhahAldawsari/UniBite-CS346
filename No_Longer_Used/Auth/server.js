

// // const express = require('express')
// // const app = express()
// // const bcrypt = require('bcrypt')
// // const passport = require('passport')
// // const flash = require('express-flash')
// // const session = require('express-session')
// // const methodOverride = require('method-override')

// // const initializePassport = require('./passport-config')
// // initializePassport(
// //   passport,
// //   email => users.find(user => user.email === email),
// //   id => users.find(user => user.id === id)
// // )

// // const users = []

// // app.set('view-engine', 'ejs')
// // app.use(express.urlencoded({ extended: false }))
// // app.use(flash())
// // app.use(session({
// //   secret: process.env.SESSION_SECRET,
// //   resave: false,
// //   saveUninitialized: false
// // }))
// // app.use(passport.initialize())
// // app.use(passport.session())
// // app.use(methodOverride('_method'))
// // // app.use(express.static(path.join(__dirname, 'public')));
// // app.get('/', checkAuthenticated, (req, res) => {
// //   res.render('index.ejs', { name: req.user.name })
// // })

// // app.get('/login', checkNotAuthenticated, (req, res) => {
// //   res.render('login.ejs')
// // })

// // app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
// //   successRedirect: '/',
// //   failureRedirect: '/login',
// //   failureFlash: true
// // }))

// // app.get('/register', checkNotAuthenticated, (req, res) => {
// //   res.render('register.ejs')
// // })

// // app.post('/register', checkNotAuthenticated, async (req, res) => {
// //   try {
// //     const hashedPassword = await bcrypt.hash(req.body.password, 10)
// //     users.push({
// //       id: Date.now().toString(),
// //       name: req.body.name,
// //       email: req.body.email,
// //       password: hashedPassword
// //     })
// //     res.redirect('/login')
// //   } catch {
// //     res.redirect('/register')
// //   }
// // })



// // app.delete('/logout', (req, res) => {
// //   req.logout((err) => {
// //       if (err) {
// //           return res.status(500).send('Error logging out');
// //       }
// //       res.redirect('/'); // Redirect to the home page after logout
// //   });
// // });

// // function checkAuthenticated(req, res, next) {
// //   if (req.isAuthenticated()) {
// //     return next()
// //   }

// //   res.redirect('/login')
// // }

// // function checkNotAuthenticated(req, res, next) {
// //   if (req.isAuthenticated()) {
// //     return res.redirect('/')
// //   }
// //   next()
// // }

// // app.listen(3000)
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const passport = require('passport');
// const flash = require('express-flash');
// const session = require('express-session');
// const methodOverride = require('method-override');
// const mongoose = require('mongoose');

// const initializePassport = require('./passport-config');
// const User = require('./models/user');

// initializePassport(passport, async (email) => {
//   return await User.findOne({ email: email });
// }, async (id) => {
//   return await User.findById(id);
// });

// mongoose.connect('mongodb+srv://ghibra:unib8@cluster0.p7csf5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {


// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });





// app.set('view-engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));
// app.use(flash());

// app.use(session({
//   secret: 'secret', 
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// app.use(methodOverride('_method'));








// app.get('/', checkAuthenticated, (req, res) => {
//   res.render('index.ejs', { name: req.user.name });
// });

// app.get('/login', checkNotAuthenticated, (req, res) => {
//   res.render('login.ejs');
// });

// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }));

// app.get('/register', checkNotAuthenticated, (req, res) => {
//   res.render('register.ejs');
// });





// app.post('/register', checkNotAuthenticated, async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword
//     });

//     // Attempt to save the new user
//     await newUser.save();

//     // If user is saved successfully, redirect to login page
//     res.redirect('/login');
//   } catch (error) {
//     // Check if the error is due to duplicate email (unique constraint violation)
//     if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
//       // Handle duplicate email error
//       return res.status(400).send('Email is already registered');
//     }
    
//     // For other errors, redirect to the registration page with a generic error message
//     console.error('Error saving user:', error);
//     res.redirect('/register');
//   }
// });

// // 
// app.delete('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }

//   res.redirect('/login');
// }

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/');
//   }
//   next();
// }

// app.listen(3002, () => {
//   console.log('Server started on port 3002');
// });


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const initializePassport = require('./passport-config');
initializePassport(passport);

const User = require('./models/user'); // Ensure the correct path to the User model

mongoose.connect(process.env.DATABASE_URL, {
  
 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: 'secret', 
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name });
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    await newUser.save();
    res.redirect('/login');
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
      return res.status(400).send('Email is already registered');
    }
    
    console.error('Error saving user:', error);
    res.redirect('/register');
  }
});

app.delete('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.redirect('/');
  });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

app.listen(3002, () => {
  console.log('Server started on port 3002');
});
