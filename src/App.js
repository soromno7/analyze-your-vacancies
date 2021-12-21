import "./App.scss"
export function App() {

  const immutableArr = ['btn'];  

  for(let i = 1; i <= 16; i++) {
    immutableArr.push('div' + i)
  }

  const changeColor = (e) => {
    if(e.target.className === 'btn') {
      e.currentTarget.childNodes.forEach((e) => e.style.background = '#900')
      e.target.style.background = 'black'
    } 
    if(immutableArr.includes(e.target.className)) return
    if(e.target.tagName === 'DIV') {
      e.target.style.background = '#333'
    }
  }

  return (
      <main onClick={changeColor}>
        <div className="btn" style={{background: "black"}}>Reset</div>
        <div className="div1">1</div>
        <div className="div2">2</div>
        <div className="div3">3</div>
        <div className="div4">4</div>
        <div className="div5">5</div>
        <div className="div6">JS</div>
        <div className="div7">HTML</div>
        <div className="div8">CSS</div>
        <div className="div9">Jest</div>
        <div className="div10">React</div>
        <div className="div11">Redux</div>
        <div className="div12">Angular</div>
        <div className="div13">TS</div>
        <div className="div14">Webpack</div>
        <div className="div15">Node</div>
        <div className="div16">Vue</div>
        <div className="div17"> </div>
        <div className="div18"> </div>
        <div className="div19"> </div>
        <div className="div20"> </div>
        <div className="div21"> </div>
        <div className="div22"> </div>
        <div className="div23"> </div>
        <div className="div24"> </div>
        <div className="div25"> </div>
        <div className="div26"> </div>
        <div className="div27"> </div>
        <div className="div28"> </div>
        <div className="div29"> </div>
        <div className="div30"> </div>
        <div className="div31"> </div>
        <div className="div32"> </div>
        <div className="div33"> </div>
        <div className="div34"> </div>
        <div className="div35"> </div>
        <div className="div36"> </div>
        <div className="div37"> </div>
        <div className="div38"> </div>
        <div className="div39"> </div>
        <div className="div40"> </div>
        <div className="div41"> </div>
        <div className="div42"> </div>
        <div className="div43"> </div>
        <div className="div44"> </div>
        <div className="div45"> </div>
        <div className="div46"> </div>
        <div className="div47"> </div>
        <div className="div48"> </div>
        <div className="div49"> </div>
        <div className="div50"> </div>
        <div className="div51"> </div>
        <div className="div52"> </div>
        <div className="div53"> </div>
        <div className="div54"> </div>
        <div className="div55"> </div>
        <div className="div56"> </div>
        <div className="div57"> </div>
        <div className="div58"> </div>
        <div className="div59"> </div>
        <div className="div60"> </div>
        <div className="div61"> </div>
        <div className="div62"> </div>
        <div className="div63"> </div>
        <div className="div64"> </div>
        <div className="div65"> </div>
        <div className="div66"> </div>
        <div className="div67"> </div>
        <div className="div68"> </div>
        <div className="div69"> </div>
        <div className="div70"> </div>
        <div className="div71"> </div>
      </main>
  );
}

export default App;
