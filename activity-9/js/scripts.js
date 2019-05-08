var data = [
  {
    id: 1,
    title: '> Age',
    body:
      'The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.',
    author: 'Aldous Huxley'
  },
  {
    id: 2,
    title: '> Change',
    body:
      'Change will not come if we wait for some other person or some other time. We are the ones we\'ve have been waiting for. We are the change that we seek.',
    author: 'Barack Obama'
  },
  {
    id: 3,
    title: '> Death',
    body:
      'When your time comes to die, be not like those whose hearts are filled with fear of death, so that when their time comes they weep and pray for a little more time to live their lives over again in a different way. Sing your death song, and die like a hero going home.',
    author: 'Tecumseh'
  },
  {
    id: 4,
    title: '> Failure',
    body:
      'Success is not final, failure is not fatal. It is the courage to continue that counts.',
    author: 'Winston Churchill'
  },
  {
    id: 5,
    title: '> Forgiveness',
    body:
      'We must develop and maintain the capacity to forgive. He who is devoid of the power to forgive is devoid of the power to love. There is some good in the worst of us and some evil in the best of us. When we discover this, we are less prone to hate our enemies.',
    author: 'Martin Luther King, Jr.'
  },
  {
    id: 6,
    title: '> Love',
    body:
      'Love takes off masks that we fear we cannot live without and know we cannot live within.',
    author: 'James Baldwin'
  },
  {
    id: 7,
    title: '> Procrastination',
    body:
      'Never put off till tomorrow what you can do day after tomorrow just as well.',
    author: 'Mark Twain'
  },
  {
    id: 8,
    title: '> Perseverence',
    body:
      'If at first you don’t succeed, try, try again. Then quit. No use being a damn fool about it.',
    author: 'W.C. Fields'
  },
  {
    id: 9,
    title: '> Truth',
    body:
      'Two wrongs don\'t make a right, but they make a good excuse.',
    author: 'Thomas Stephen Szasz'
  },
  {
    id: 10,
    title: '> Wisdom',
    body:
    'By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.',
    author: 'Confuscius'
  }
]

var $nav = $('#nav-container')
var $intro = $('#intro')
var $posts = $('#post-container')

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    // create all elements
    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>'),
      $author = $('<span class="author"></span>'),
      $navItem = $('<li></li>')

    // add post data
    $title.text(data[i].title)
    $body.text(data[i].body)
    $author.text(data[i].author)

    // add nav ids
    $navItem.attr('id', data[i].id)
    $navItem.text(data[i].title)

    // put post elements together
    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author)

    // add posts and nav menu
    $posts.append($post)
    $nav.append($navItem)

    // click event
    $navItem.on('click', function() {
      var id = $(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-' + id).fadeIn()
    })

    // show intro, hide posts
    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}

initPosts()
