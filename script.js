function show()
{
    document.getElementById('meniu').classList.toggle('active')
}

var animation= bodymovin.loadAnimation
({
container: document.getElementById('sliding_text'),
rederer:'jpeg',
loop:true,
autoplay:true,
path: 'lotties/developer.json'
})