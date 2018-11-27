## Resolving Conflicts

Despite out best intentions, sometimes we make changes that can't be automatically merged.  If two developers edit the same line of code Git will require a manual resolution. When you pull code that conflicts with your own edits, Git will alert to which files needs resolving and mark the conflicts.


 ![alt_text](assets/05/conflict.png "Conflicts")


 ![alt_text](assets/05/conflicts-marked-in-code.png "Conflicts Marked in Code")


```
<<<<<<< HEAD
        <Text>Konnichiwa World!</Text>
=======
        <Text>Hola World!</Text>
>>>>>>> master
```