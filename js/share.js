const url = 'https://mbti-writing-routine-test.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '유형별 글쓰기 루틴 테스트';
  const shareDes = infoList[resultAlt].name;
  var tmp = location.pathname.split("/").pop().toString();
  tmp = tmp.replace('result-','');
  tmp = tmp.replace('.html','');
  const shareImage = url + 'img/IMG_080' + tmp + '.png';
  const shareURL = url + 'page/result-' + tmp + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}
