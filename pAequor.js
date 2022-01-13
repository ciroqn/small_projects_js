/*This project has a fadctory function which creates instances of P. aequor specimens, each with a specimen number and a mock DNA array with 15 bases. Each 
specimen has numerous functions to mimic mutations in their environment. DNA can also be compared between specimens. A work in progress that can definitely be
improved.*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// Each 'num' has to be unique
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const randNum = Math.floor(Math.random()*15);
      const randBase = returnRandBase();
      if (this.dna[randNum] !== randBase) {
        this.dna[randNum] = randBase;
      } else {
        this.mutate();
      }
      // See change form original, arr:
      return arr;
    },

    compareDNA(pAequorObj) {
      let counter = 0;
      for (let i = 0; i < pAequorObj.dna.length; i++) {
        let thisDNA = this.dna;
        let inputDNA = pAequorObj.dna;
        if (thisDNA[i] === inputDNA[i]) {
          counter++;
        };
      }
      let percentage = (counter/15)*100;
        return `Specimen #${this.specimenNum} and #${pAequorObj.specimenNum} have ${percentage.toFixed(0)}% DNA in common.`;
    },

    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          counter++
        };
      }
      let percentageCG = (counter/15)*100;
      if (percentageCG >= 60) {
        return true;
      } else {
        return false;
      };
    }

  }
};


// Create 30 instances of pAequor that WILL survive:

const createSpecimens = () => {
  const arrayOfSpecimens = [];
  let counter = 0;
  while (arrayOfSpecimens.length < 30) {
    let pAequorWillSurvive = pAequorFactory(counter, mockUpStrand());
    if (pAequorWillSurvive.willLikelySurvive()) {
      arrayOfSpecimens.push(pAequorWillSurvive);
    };
    counter++;
  }
};

// Creates 30 spcimens
const getSpecimens = createSpecimens();

// Alternatively create individual specimens
const pAequorSpec = pAequorFactory(1, mockUpStrand());

const pAequorSpec1 = pAequorFactory(2,mockUpStrand());

// Example log statements
console.log(pAequorSpec);
console.log(pAequorSpec.mutate());
console.log('\n');
console.log(pAequorSpec1);
console.log('\n');
console.log(pAequorSpec.compareDNA(pAequorSpec1));
