let printflag = False;

function audioplay(name){
    // 引数：誰の声にするか識別するキー

    // print
    let comment = document.getElementById("result");

    let aud = document.getElementById("audioplayer");
    let playlist_all = { 
        // キー：引数になってるやつ
        // 要素：その人のプレイリスト，中身はmp3ファイル名
        // mp3ファイルは "audio/" + name + "/"  に置く．
        meme:[
            "meme1.mp3",
            "meme2.mp3",
            "meme3.mp3",
        ],
        you:[
            "you1.mp3",
            "you2.mp3"
        ],
        bruno:[
            "bruno1.mp3",
            "bruno2.mp3",
            "bruno3.mp3"
        ]
    };

    // プレイリスト選択，選曲=====
    const playlist = playlist_all[name];
    const len = playlist.length;
    const x = Math.floor(Math.random() * len);
    const AudSrcPath = "audio/" + name + "/" + playlist[x];
    aud.src = AudSrcPath;   
    //再生
    aud.play();


    // 画像拡大縮小=====
    let id_thisimg = document.getElementById("img_" + name);
    let class_allimg = document.getElementsByClassName('imgscaling');

    id_thisimg.classList.add('on');
    for (let i = 0; i < class_allimg.length; i++) {
        if (!(class_allimg[i].id === ("img_" + name))){
            class_allimg[i].classList.remove('on');
        } 
    }

    // print=====
    if (printflag){
        comment.textContent = `${AudSrcPath}, len=${len}, x=${x}, ${class_allimg.length}, ${class_allimg[0].id}, ${class_allimg[1].id}`;
    }
}

function audiopause(){
    comment = document.getElementById("result"); //print

    let aud = document.getElementById("audioplayer");
    let class_allimg = document.getElementsByClassName('imgscaling');
    aud.pause();
    for (let i = 0; i < class_allimg.length; i++) {
        class_allimg[i].classList.remove('on');
    }
    
    if (printflag){
        comment.textContent = `pasued`; //print
    }
}
