// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (number,strand) => {
  return {
    specimenNum: number,
    dna: strand,
    mutate (){
      let notMutated = true;
      while(notMutated) {
        let randIndex = Math.floor(Math.random() * 15);
        let randBase = returnRandBase();
        if (this.dna[randIndex]!==randBase){
          this.dna[randIndex] = randBase;
          notMutated = false;
        }
      }
      return this.dna;
    },
    compareDNA (pAequor) {
      let inCommon = 0;
      for (let i=0; i < this.dna.length; i++) {
        if(this.dna[i] === pAequor.dna[i]){
          inCommon++;
        }
      }
      let percentage = (inCommon/this.dna.length) * 100;
        let specimens = `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum}`;
        let msg = specimens + ' ' + 'have' + ' ' + `${percentage}%` + ' ' + 'DNA in common';
        console.log(msg);
    },
    willLikelySurvive () {
      let cCount = 0;
      let cPerc = 0
      let gCount = 0;
      let gPerc = 0;
      for(let base of this.dna) {
        if (base === 'C'){
          cCount++;
        } 
        if(base === 'G'){
          gCount++;
        }
      }
      cPerc = (cCount/this.dna.length)*100;
      gPerc = (gCount/this.dna.length)*100;
      if(cPerc >= 60 || gPerc >= 60) {
        return true;
      }
      return false;
    }
  }
}

const pAequors = [];
for (let i=0; i < 30; i++) {
  let strand = mockUpStrand();
  pAequor = pAequorFactory(i+1,strand);
  pAequors.push(pAequor);
}

// test
console.log(pAequors);
pAequors[29].mutate();
console.log(pAequors[29]);




