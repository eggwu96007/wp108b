sd=[1,2,3,4,5];
total=0;
for(i=0;i<sd.length;i++)
{
    total=total+sd[i]
}
average=total/sd.length;
total2=0;
for(j=0;j<sd.length;j++)
{
    total2=(sd[i]-average)^2+total2;
}

ans=Math.sqrt(total2/sd.length);
console.log("標準差為%d",ans);