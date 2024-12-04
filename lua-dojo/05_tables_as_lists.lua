-- NOTE: This is Lua's only data structure

-- The same data structure is used for both maps and lists

-------------------------------------------------------------------------------

-- NOTE: Lists

local list = { 
    "first", 
    2, 
    false,
    function ()
        print("Fourth!") 
    end
}

-- NOTE: In Lua lists start at index 1
-- Unlike other programming languages that start at index 0, 
-- in Lua programming languages start at index 1

print("The first item is:", list[1])

-- list[4]() is used because the Fourth item is a function 
-- that I want to call
print("The Fourth item is:", list[4]())
-- The first item is:      first
-- Fourth!
-- The Fourth item is:

-------------------------------------------------------------------------------
