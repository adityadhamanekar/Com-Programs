const a1 = `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main()
{
int w,i,f,frames[50];
printf("Enter window size: ");
scanf("%d",&w);
printf("\\nEnter number of frames to transmit: ");
scanf("%d", &f);
printf("\\nEnter %d frames: ",f);
for(i=1; i<=f; i++)
scanf("%d",&frames[i]);
printf("\\nWith sliding window protocol the frames will be sent in the followingmanner (assuming no corruption of frames)\\n\\n");
printf("After sending %d frames at each stage sender waits foracknowledgement sent by the receiver\\n\\n",w);
for(i=1;i<=f;i++)
{
if(i%w==0)
{
printf("%d\\n",frames[i]);
printf("Acknowledgement of above frames sent is received by sender\\n\\n");
}
else
printf("%d ",frames[i]);
}
if(f%w!=0)
printf("\\nAcknowledgement of above frames sent is received bysender\\n");
return 0;
}

`;

const a2 = `
#include<stdio.h>
struct routers
 {
 int dist[10],from[10];
 }r[10];
int main()
{
 int nodes,cost[10][10],i,j,k;
 printf("Enter the number of nodes: ");
 scanf("%d",&nodes);
 printf("\\nEnter the costs in terms of matrix:\\n");
 for(i=1;i<=nodes;i++)
 {
 for(j=1;j<=nodes;j++)
 {
 scanf("%d",&cost[i][j]);
 r[i].dist[j]=cost[i][j];
 r[i].from[j]=j;
 }
 }
 printf("\\nBefore distance vector algorithm\\n");
for(i=1;i<=nodes;i++)
{
 printf("\\n\\n For router: %d\\n",i);
 for(j=1;j<=nodes;j++)
 {
 printf("\\t\\nNode:%d Via:%d Distance:%d",j,r[i].from[j],r[i].dist[j]);
  }
}
for(i=1;i<=nodes;i++)
{
 for(j=1;j<=nodes;j++)
 {
 for(k=1;k<=nodes;k++)
 {
 if(r[i].dist[j]>r[i].dist[k]+r[k].dist[j])
 {
 r[i].dist[j]=r[i].dist[k]+r[k].dist[j];
 r[i].from[j]=k;
 }
 }
 }
}
 printf("\\n");
 printf("\\n After distance vector algorithm");
 for(i=1;i<=nodes;i++)
 {
 printf("\\n\\n For router: %d\\n",i);
 for(j=1;j<=nodes;j++)
 {
 printf("\\t\\nNode:%d Via:%d Distance:%d",j,r[i].from[j],r[i].dist[j]);
 }
 }
 printf("\\n\\n");
}

`;

const a3 = `

#include<stdio.h>
#define Min(a,b) (a<b?a:b)
int main()
{
int size,orate,inp[10]={0},i=0,ch,n,remain=0,x,drop;
printf("\\nEnter the Bucket size:");
scanf("%d",&size);
printf("\\nEnter the output rate:");
scanf("%d",&orate);
do
{
printf("\\nEnter the packets at %d sec:",i+1);
scanf("%d",&inp[i]);
i++;
printf("\\nPress 1 to continue else press 0:");
scanf("%d",&ch);
}while(ch);
n=i;
printf("\\nTime\\tReceived\\tSent\\tDropped\\tRemain");
for(i=0;remain||i<n;i++)
{
printf("\\n%d",i+1);
printf("\\t%d",inp[i]);
printf("\\t\\t%d",Min(remain+inp[i],orate));
if((x=inp[i]+remain-orate)>0)
{
if(x>size)
{
remain=size;
drop=x-size;
}
else
{
drop=0;
remain=x;
}
}
else
{
drop=0;
remain=0;
}
printf("\\t%d\\t%d",drop,remain);
}
return 0;
}

`;

const a4 = `
#include <stdio.h>
#include <string.h>
char t[100], cs[100], g[50];
int a, i, j, N;
void xor1() {
 for (j = 1; j < N; j++)
 cs[j] = ((cs[j] == g[j]) ? '0' : '1');
}
void crc() {
 for (i = 0; i < N; i++)
 cs[i] = t[i];
 do {
 if (cs[0] == '1')
 xor1();
 for (j = 0; j < N - 1; j++)
 cs[j] = cs[j + 1];
 cs[j] = t[i++];
 } while (i <= a + N - 1);
}
int main() {
 printf("\\nEnter data : ");
 scanf("%s", t);
 printf("\\nEnter the generating polynomial data:");
 scanf("%s", g);
 N = strlen(g);
 a = strlen(t);
 if (((N - 1) < a) && (g[0] == '1') && (g[N - 1] == '1')) {
 for (i = a; i < a + N - 1; i++)
 t[i] = '0';
 printf("\\nModified data is : %s", t);

 crc();
 printf("\\nChecksum is: %s", cs);
 for (i = a; i < a + N - 1; i++)
 t[i] = cs[i - a];
 printf("\\nTransmitting codeword is : %s", t);
 printf("\\nEnter received message: ");
 scanf("%s", t);
 crc();
 for (i = 0; (i < N - 1) && (cs[i] != '1'); i++);
 if (i < N - 1)
 printf("\\nWith Error\\n\\n");
 else
 printf("\\nWithout error\\n\\n");
 } else
 printf("Wrong generating polynomial \\n");
 return 0;
}



`;

const a5 = `

#include <stdio.h>
int min(int a, int b) { return a < b ? a : b; }

int main(void) {
  int nsec, remain = 0, i, drop, size, orate, inp[10] = {0}, x;
  printf("enter the size of the bucket : ");
  scanf("%d", &size);
  printf("\\nEnter the output rate : ");
  scanf("%d", &orate);
  printf("\\nEnter for how many second you want to send packets : ");
  scanf("%d", &nsec);
  for (i = 0; i < nsec; i++) {
    printf("\\n Enter number of packets for sec %d : ", i + 1);
    scanf("%d", &inp[i]);
  }

  printf("\\ntime  packet  output-Rate  drop   remain");

  for (i = 0; remain || i < nsec; i++) {
    printf("\\n%d\\t\\t", i + 1);
    printf("%d\\t\\t\\t", inp[i]);
    printf("%d\\t\\t", min(remain + inp[i], orate));

    if ((x = remain + inp[i] - orate) > 0) {
      if (x > size) {
        drop = x - size;
        remain = size;
      } else {
        drop = 0;
        remain = x;
      }
    } else {
      drop = 0;
      remain = 0;
    }
    printf("%d\\t\\t%d ", drop, remain);
  }
}

`;

const b1 = `
Output:
Case 1: Window size < Number of frames
Enter window size: 5
Enter number of frames to transmit: 10
Enter 10 frames: 1 2 3 4 5 6 7 8 9 10
With sliding window protocol the frames will be sent in the following manner (assuming no
corruption of frames)
After sending 5 frames at each stage sender waits foracknowledgement sent by the receiver
1 2 3 4 5
Acknowledgement of above frames sent is received bysender
6 7 8 9 10
Acknowledgement of above frames sent is received by sender

Case 2: Window size = Number of frames
Enter window size: 5
Enter number of frames to transmit: 5
Enter 5 frames: 1 2 3 4 5
With sliding window protocol the frames will be sent in the following manner (assuming no
corruption of frames)
After sending 5 frames at each stage sender waits foracknowledgement sent by the receiver
1 2 3 4 5
Acknowledgement of above frames sent is received by sender

Case 3: Window size > Number of frames
Enter window size: 5
Enter number of frames to transmit: 3
Enter 3 frames: 1 2 3
With sliding window protocol the frames will be sent in the following manner (assuming no
corruption of frames)
After sending 5 frames at each stage sender waits for acknowledgement sent by the receiver
1 2 3
Acknowledgement of above frames sent is received by send

`;

const b2 = `
Output:
Enter the number of nodes: 3
Enter the costs in terms of matrix:
0 5 3
5 0 1
3 1 0

Before distance vector algorithm

For router: 1
Node:1 Via:1 Distance:0
Node:2 Via:2 Distance:5
Node:3 Via:3 Distance:3

For router: 2
Node:1 Via:1 Distance:5
Node:2 Via:2 Distance:0
Node:3 Via:3 Distance:1

For router: 3
Node:1 Via:1 Distance:3
Node:2 Via:2 Distance:1
Node:3 Via:3 Distance:0

After distance vector algorithm

For router: 1
Node:1 Via:1 Distance:0
Node:2 Via:3 Distance:4
Node:3 Via:3 Distance:3

For router: 2
Node:1 Via:3 Distance:4
Node:2 Via:2 Distance:0
Node:3 Via:3 Distance:1

For router: 3
Node:1 Via:1 Distance:3
Node:2 Via:2 Distance:1
Node:3 Via:3 Distance:0


`;

const b3 = `

Output:

Enter the Bucket size:5
Enter the output rate:3
Enter the packets at 1 sec:10
Press 1 to continue else press 0:0

Time Received Sent Dropped Remain
1       10      3     2      5
2       0       3     0      2
3       0       2     0      0

`;

const b4 = `

Output:

Enter data : 1101
Enter the generating polynomial data:101
Modified data is : 110100
Checksum is: 10
Transmitting codeword is : 110110
Enter received message: 110110
Without error

Enter data : 1101
Enter the generating polynomial data:101
Modified data is : 110100
Checksum is: 10
Transmitting codeword is : 110110
Enter received message: 110100
With Error


`;

const b5 = `
output

enter the size of the bucket : 10
Enter the output rate : 4
Enter for how many second you want to send packets : 4

Enter number of packets for sec 1 : 10
Enter number of packets for sec 2 : 19
Enter number of packets for sec 3 : 25

time  packet  output-Rate  drop   remain
1       10         4        0       6
2       19         4        11      10
3       25         4        21      10
4       0          4        0       6
5       0          4        0       2
6       0          2        0       0

`;

const programList = { a1, a2, a3, a4, a5 };
const answerList = { b1, b2, b3, b4, b5 };

var codeBlock = document.getElementById("code-block");
codeBlock.textContent = programList["a1"];

// Call the initialization function
initializeHighlighting();

var answerBlock = document.getElementById("answer-block");
answerBlock.textContent = answerList["b1"];

//
document.addEventListener("DOMContentLoaded", function () {
  var selectLanguage = document.getElementById("select-language");

  selectLanguage.addEventListener("change", function () {
    var selectedValue = selectLanguage.value;

    codeBlock.textContent = programList[selectedValue];
    initializeHighlighting();
    answerBlock.textContent = answerList["b" + selectedValue.charAt(1)];
  });
});

function initializeHighlighting() {
  hljs.highlightAll();
}

// This function copies the content of the code block to the clipboard
function copyCode() {
  var code = codeBlock.textContent;
  navigator.clipboard
    .writeText(code)
    .then(function () {
      alert("Code copied to clipboard!");
    })
    .catch(function (error) {
      console.error("Failed to copy code: ", error);
    });
}

document.querySelector(".copy-button").addEventListener("click", () => {
  copyCode();
});
