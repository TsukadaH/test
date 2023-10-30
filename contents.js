document.addEventListener('DOMContentLoaded', (event) => {
  const descriptions = {
    'ai-girlfriend': {
      title: 'AI彼女',
      content: 'AIを使って、あなたにとって理想の恋人と出会えます。そのビジュアルはあなたが望むもの…。さらに、あなたはその恋人と声を交わしてお話しすることで、少し不思議な体験もできます。',
      image: 'gallery/ai-girlfriend.jpg'
    },
    'chat-gpt-fortune-telling': {
      title: 'チャット GPT 占い',
      content: 'AIが占い師になり、あなたの将来や、運勢、さらにはラッキーアイテムまで様々なことを占います。',
      image: 'gallery/chat-gpt-fortune-telling.jpg'
    },
    'ai-consultation': {
      title: 'AI 相談',
      content: '好みの身長や性格など様々な特徴をAIに教え、あなたにとって理想の恋人を作ることができます。',
      image: 'gallery/ai-consultation.jpg'
    },
    'music-band': {
      title: '音楽隊',
      content: 'AIで音楽を生成し、会場を皆さんと一緒に盛り上げていきます。音楽を作ったことがなくても大丈夫です、どなたでも是非お越しください。',
      image: 'gallery/music-band.jpg'
    },
    'miss-contest': {
      title: 'ミスコン',
      content: '橋本ゼミではsatoshiミスコンが開催中！画像生成、プロフィールやインタビューなどの設定も全てAIを使っています。お気に入りの美女に投票することが出来ます。ミスコングランプリは誰の手に…？',
      image: 'gallery/miss-contest.jpg'
    }
  };

  window.showDescription = function (id) {
    const description = descriptions[id];
    if (!description) {
      console.error('指定されたIDの説明が見つかりません:', id);
      return;
    }
  
    document.getElementById('description-image').src = description.image;
    document.getElementById('description-title').textContent = description.title;
    document.getElementById('description-content').textContent = description.content;
    
    document.getElementById('grid').style.display = 'none';
    document.getElementById('description').style.display = 'flex';
  };

  window.closeDescription = function () {
    document.getElementById('grid').style.display = 'flex';
    document.getElementById('description').style.display = 'none';
  };
});
