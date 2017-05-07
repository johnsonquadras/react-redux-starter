import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users =
  [{ "id": 1, "first_name": "Prescott", "last_name": "Sabie", "email": "psabie0@rambler.ru", "gender": "Male", "avatar": "https://robohash.org/doloremqueetlaborum.bmp?size=50x50&set=set1" },
  { "id": 2, "first_name": "Beale", "last_name": "Mustard", "email": "bmustard1@com.com", "gender": "Male", "avatar": "https://robohash.org/placeatcorporissunt.bmp?size=50x50&set=set1" },
  { "id": 3, "first_name": "Noland", "last_name": "Cardoo", "email": "ncardoo2@dailymail.co.uk", "gender": "Male", "avatar": "https://robohash.org/laudantiumdictacum.bmp?size=50x50&set=set1" },
  { "id": 4, "first_name": "Constantino", "last_name": "Filmer", "email": "cfilmer3@discuz.net", "gender": "Male", "avatar": "https://robohash.org/consequaturmolestiaedolores.jpg?size=50x50&set=set1" },
  { "id": 5, "first_name": "Mendy", "last_name": "Jimmes", "email": "mjimmes4@comcast.net", "gender": "Male", "avatar": "https://robohash.org/facilissedet.png?size=50x50&set=set1" },
  { "id": 6, "first_name": "Lotte", "last_name": "Dowker", "email": "ldowker5@toplist.cz", "gender": "Female", "avatar": "https://robohash.org/nonveritatisporro.png?size=50x50&set=set1" },
  { "id": 7, "first_name": "Patrice", "last_name": "Measham", "email": "pmeasham6@cbsnews.com", "gender": "Male", "avatar": "https://robohash.org/quaesimiliqueet.bmp?size=50x50&set=set1" },
  { "id": 8, "first_name": "Flossy", "last_name": "Mellers", "email": "fmellers7@irs.gov", "gender": "Female", "avatar": "https://robohash.org/inmodivoluptatem.jpg?size=50x50&set=set1" },
  { "id": 9, "first_name": "Gabe", "last_name": "Roberto", "email": "groberto8@google.ca", "gender": "Male", "avatar": "https://robohash.org/repellenduspariaturbeatae.bmp?size=50x50&set=set1" },
  { "id": 10, "first_name": "Briano", "last_name": "Reason", "email": "breason9@netlog.com", "gender": "Male", "avatar": "https://robohash.org/molestiaeconsequaturdeserunt.jpg?size=50x50&set=set1" },
  { "id": 11, "first_name": "Diane-marie", "last_name": "Levay", "email": "dlevaya@instagram.com", "gender": "Female", "avatar": "https://robohash.org/iustodoloremvoluptatum.bmp?size=50x50&set=set1" },
  { "id": 12, "first_name": "Joella", "last_name": "Kennermann", "email": "jkennermannb@virginia.edu", "gender": "Female", "avatar": "https://robohash.org/exercitationemquasiconsectetur.png?size=50x50&set=set1" },
  { "id": 13, "first_name": "Mikael", "last_name": "Sollis", "email": "msollisc@weibo.com", "gender": "Male", "avatar": "https://robohash.org/quofacerererum.bmp?size=50x50&set=set1" },
  { "id": 14, "first_name": "Rorke", "last_name": "Christofle", "email": "rchristofled@nih.gov", "gender": "Male", "avatar": "https://robohash.org/quiaerrorfugit.png?size=50x50&set=set1" },
  { "id": 15, "first_name": "Petronella", "last_name": "Sinnock", "email": "psinnocke@pagesperso-orange.fr", "gender": "Female", "avatar": "https://robohash.org/etistedelectus.bmp?size=50x50&set=set1" },
  { "id": 16, "first_name": "Monika", "last_name": "Hilbourne", "email": "mhilbournef@cmu.edu", "gender": "Female", "avatar": "https://robohash.org/laboriosamdoloremconsequatur.jpg?size=50x50&set=set1" },
  { "id": 17, "first_name": "Odey", "last_name": "Abbitt", "email": "oabbittg@examiner.com", "gender": "Male", "avatar": "https://robohash.org/sintconsequaturdolorem.png?size=50x50&set=set1" },
  { "id": 18, "first_name": "Vanya", "last_name": "Dy", "email": "vdyh@uiuc.edu", "gender": "Female", "avatar": "https://robohash.org/eumadeaque.jpg?size=50x50&set=set1" },
  { "id": 19, "first_name": "Alysa", "last_name": "Frangione", "email": "afrangionei@ebay.co.uk", "gender": "Female", "avatar": "https://robohash.org/quifugitofficiis.jpg?size=50x50&set=set1" },
  { "id": 20, "first_name": "Lezlie", "last_name": "Stolberg", "email": "lstolbergj@auda.org.au", "gender": "Female", "avatar": "https://robohash.org/illoetaperiam.bmp?size=50x50&set=set1" },
  { "id": 21, "first_name": "Prescott", "last_name": "O'Keefe", "email": "pokeefek@google.com.br", "gender": "Male", "avatar": "https://robohash.org/nobisquiaut.png?size=50x50&set=set1" },
  { "id": 22, "first_name": "Vasily", "last_name": "Prettyjohn", "email": "vprettyjohnl@ox.ac.uk", "gender": "Male", "avatar": "https://robohash.org/sitsequivero.bmp?size=50x50&set=set1" },
  { "id": 23, "first_name": "Jeannette", "last_name": "Badsworth", "email": "jbadsworthm@mozilla.org", "gender": "Female", "avatar": "https://robohash.org/recusandaecumerror.jpg?size=50x50&set=set1" },
  { "id": 24, "first_name": "Daniela", "last_name": "Haggata", "email": "dhaggatan@amazonaws.com", "gender": "Female", "avatar": "https://robohash.org/minuscommodiquia.jpg?size=50x50&set=set1" },
  { "id": 25, "first_name": "Selena", "last_name": "Overbury", "email": "soverburyo@dot.gov", "gender": "Female", "avatar": "https://robohash.org/officiisquidemlaborum.bmp?size=50x50&set=set1" },
  { "id": 26, "first_name": "Gasparo", "last_name": "Sprague", "email": "gspraguep@about.com", "gender": "Male", "avatar": "https://robohash.org/iustodoloribusut.jpg?size=50x50&set=set1" },
  { "id": 27, "first_name": "Curr", "last_name": "Riddle", "email": "criddleq@cpanel.net", "gender": "Male", "avatar": "https://robohash.org/consecteturquosvoluptates.jpg?size=50x50&set=set1" },
  { "id": 28, "first_name": "Donnie", "last_name": "Brownstein", "email": "dbrownsteinr@freewebs.com", "gender": "Male", "avatar": "https://robohash.org/idesseat.bmp?size=50x50&set=set1" },
  { "id": 29, "first_name": "Donica", "last_name": "Seleway", "email": "dseleways@wsj.com", "gender": "Female", "avatar": "https://robohash.org/iustohicasperiores.png?size=50x50&set=set1" },
  { "id": 30, "first_name": "Caddric", "last_name": "Caplan", "email": "ccaplant@oaic.gov.au", "gender": "Male", "avatar": "https://robohash.org/etmodieum.png?size=50x50&set=set1" },
  { "id": 31, "first_name": "Durward", "last_name": "Rottery", "email": "drotteryu@github.io", "gender": "Male", "avatar": "https://robohash.org/veritatisquiaexpedita.png?size=50x50&set=set1" },
  { "id": 32, "first_name": "Nev", "last_name": "Waghorn", "email": "nwaghornv@omniture.com", "gender": "Male", "avatar": "https://robohash.org/veritatiseosquisquam.bmp?size=50x50&set=set1" },
  { "id": 33, "first_name": "Hally", "last_name": "Vizor", "email": "hvizorw@cnet.com", "gender": "Female", "avatar": "https://robohash.org/etidsequi.bmp?size=50x50&set=set1" },
  { "id": 34, "first_name": "Jesselyn", "last_name": "Fortnon", "email": "jfortnonx@privacy.gov.au", "gender": "Female", "avatar": "https://robohash.org/eaqueetdistinctio.jpg?size=50x50&set=set1" },
  { "id": 35, "first_name": "Kala", "last_name": "Estoile", "email": "kestoiley@plala.or.jp", "gender": "Female", "avatar": "https://robohash.org/idquibusdameos.png?size=50x50&set=set1" },
  { "id": 36, "first_name": "Pasquale", "last_name": "Pescod", "email": "ppescodz@tumblr.com", "gender": "Male", "avatar": "https://robohash.org/quiverodeserunt.jpg?size=50x50&set=set1" },
  { "id": 37, "first_name": "Yovonnda", "last_name": "Creevy", "email": "ycreevy10@mlb.com", "gender": "Female", "avatar": "https://robohash.org/voluptatibusvoluptateseos.jpg?size=50x50&set=set1" },
  { "id": 38, "first_name": "Anatole", "last_name": "Barensky", "email": "abarensky11@mozilla.org", "gender": "Male", "avatar": "https://robohash.org/ducimustotamvoluptas.jpg?size=50x50&set=set1" },
  { "id": 39, "first_name": "Benn", "last_name": "Denisyuk", "email": "bdenisyuk12@deliciousdays.com", "gender": "Male", "avatar": "https://robohash.org/illoaperiampraesentium.bmp?size=50x50&set=set1" },
  { "id": 40, "first_name": "Kiah", "last_name": "Giacomelli", "email": "kgiacomelli13@earthlink.net", "gender": "Female", "avatar": "https://robohash.org/occaecatiestdicta.bmp?size=50x50&set=set1" },
  { "id": 41, "first_name": "Lurette", "last_name": "Bernhard", "email": "lbernhard14@yahoo.co.jp", "gender": "Female", "avatar": "https://robohash.org/aspernaturlaboriosamvoluptate.bmp?size=50x50&set=set1" },
  { "id": 42, "first_name": "Warren", "last_name": "Dayer", "email": "wdayer15@aol.com", "gender": "Male", "avatar": "https://robohash.org/facereperspiciatisvoluptatibus.bmp?size=50x50&set=set1" },
  { "id": 43, "first_name": "Hanan", "last_name": "Gooders", "email": "hgooders16@instagram.com", "gender": "Male", "avatar": "https://robohash.org/dignissimosquiamagnam.png?size=50x50&set=set1" },
  { "id": 44, "first_name": "Sigismundo", "last_name": "Eadmeades", "email": "seadmeades17@networksolutions.com", "gender": "Male", "avatar": "https://robohash.org/porroateveniet.png?size=50x50&set=set1" },
  { "id": 45, "first_name": "Melisandra", "last_name": "Sheals", "email": "msheals18@360.cn", "gender": "Female", "avatar": "https://robohash.org/etnobisquasi.bmp?size=50x50&set=set1" },
  { "id": 46, "first_name": "Leoine", "last_name": "Girardez", "email": "lgirardez19@spiegel.de", "gender": "Female", "avatar": "https://robohash.org/omnisvoluptasmagni.jpg?size=50x50&set=set1" },
  { "id": 47, "first_name": "Ryon", "last_name": "Kermott", "email": "rkermott1a@qq.com", "gender": "Male", "avatar": "https://robohash.org/omnisillumminus.jpg?size=50x50&set=set1" },
  { "id": 48, "first_name": "Jeri", "last_name": "Karppi", "email": "jkarppi1b@dagondesign.com", "gender": "Female", "avatar": "https://robohash.org/reiciendisasperiorestenetur.bmp?size=50x50&set=set1" },
  { "id": 49, "first_name": "Douglas", "last_name": "Fesby", "email": "dfesby1c@about.me", "gender": "Male", "avatar": "https://robohash.org/eaquesuscipitet.bmp?size=50x50&set=set1" },
  { "id": 50, "first_name": "Amy", "last_name": "Krolik", "email": "akrolik1d@examiner.com", "gender": "Female", "avatar": "https://robohash.org/etcumut.jpg?size=50x50&set=set1" }];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class AuthorApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveAuthor(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (user.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (user.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (user.id) {
          const existingAuthorIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingAuthorIndex, 1, user);
        } else {
          user.id = generateId(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

  static deleteUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user !== undefined) {
          const indexOfUserToDelete = users.findIndex(userIter => {
           return userIter.id == user.id;
          });
          console.log(indexOfUserToDelete);
          users.splice(indexOfUserToDelete, 1);
        }
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;
