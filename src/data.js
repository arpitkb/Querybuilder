
export const Rule ={
    fields : ['Theme' , 'Sub-theme' , 'Reason' , 'Language' , 'Source' , 'Rating' , 'Time Period' , 'Customer ID'], 
    condition : ['Equals' , 'Does not equal' , 'Like' , 'Not like' , 'Is Empty' , 'Is' , 'Is not'],
    // value : string[],
    type: ['rule']
}


export const zz = {
  'Theme' : {
    conditions : ['Equals' , 'Does not equal' , 'Like' , 'Not like'],
    criteria : {
      'Equals':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
      'Does not equal':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
      'Like':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
      'Not like':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
    }
  },
  'Sub-theme' : {
    conditions : ['Equals' , 'Does not equal' , 'Like' , 'Not like'],
    criteria : {
      'Equals':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
      'Does not equal':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
      'Like':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
      'Not like':['Offers' , 'Performance' , 'Platform' , 'Product Feedback'],
    }
  },
  'Reason' : {
    conditions : ['Is Empty' , 'Is' , 'Is not'],
    criteria : {
      'Is Empty' : ['True','False'],
      'Is' : ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G'],
      'Is not' : ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G'],
    }
  },
  'Language' : {
    conditions : ['Equals' , 'Does not equal' , 'Like' , 'Not like'],
    criteria : {
      'Equals' : ['English' , 'Hindi','Telugu','Malyalam','Marathi'],
      'Does not equal' : ['English' , 'Hindi','Telugu','Malyalam','Marathi'],
      'Like' : ['English' , 'Hindi','Telugu','Malyalam','Marathi'],
      'Not like' : ['English' , 'Hindi','Telugu','Malyalam','Marathi'],
    }
  },
  'Source' : {
    conditions : ['Equals' , 'Does not equal' , 'Like' , 'Not like' , 'Is Empty'],
    criteria : {
      'Equals' : ['SA','SB','SC','SG'],
      'Does not equal' : ['SA','SB','SC','SG'],
      'Like' : ['SA','SB','SC','SG'],
      'Not like' : ['SA','SB','SC','SG'],
      'Is Empty' : ['True','False'],
    }
  },
  'Rating' : {
    conditions : ['Equals' , 'Does not equal','Greater than','Less than'],
    criteria : {
      'Equals' : [1,2,3,4,5,6,7,8,9,10],
      'Does not equal' : [1,2,3,4,5,6,7,8,9,10],
      'Greater than' : [1,2,3,4,5,6,7,8,9,10],
      'Less than' : [1,2,3,4,5,6,7,8,9,10],
    }
  },
  'Time Period' : {
    conditions : ['Equals' , 'Before' , 'After' ],
    criteria : {
      'Equals' : Array(15).fill(2000).map((x,y)=>x+y),
      'Before' : Array(15).fill(2000).map((x,y)=>x+y),
      'After' : Array(15).fill(2000).map((x,y)=>x+y)
    }
  },
  'Customer ID' : {
    conditions : ['Equals'],
    criteria : {
      'Equals' : ['e5f6f5','hy43f6t','f54thfdh'],
    }
  },
}



export const ops = {
  'Equals' : '==',
  'Does not equal' : '!=',
  'Like' : '$like',
  'Not like' : '$!like',
  'Is Empty':'$isEmpty',
  'Is' : '$is',
  'Is not' : '$!is',
  'Greater than' : '>',
  'Less than' : '<',
  'Before' : '$before',
  'After' : '$after'
}
