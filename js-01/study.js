console.log('読み込み成功');

function count(){
  for(let n = 1; n<= 50; n++){
    if( n % 10 === 0){
      console.log('今' + n + '回ループしました');
    } else if( n % 4 === 0){
      console.log('4で割れる数です。[' + n + ']');
    }
    
  }
  console.log('50回カウントが終わりました。');
  
}