# Next 2 Buses Feature - BusFinderChat

## Overview
Updated the BusFinderChat component to show only the **next 2 buses** departing after the user's selected time, instead of showing all available buses.

## Changes Made

### 1. Modified Bus Filtering Logic
**File**: `frontend/src/components/BusFinderChat.js`

**Before**: Showed all buses departing after selected time
**After**: Shows only the next 2 buses

### Code Changes

#### Search Function Update
```javascript
// Sort by departure time
filteredBuses.sort((a, b) => 
  a.leavingTimeFromPerdoor.localeCompare(b.leavingTimeFromPerdoor)
);

// Get only next 2 buses
const next2Buses = filteredBuses.slice(0, 2);
console.log('🚌 Next 2 buses:', next2Buses.length);

setBuses(next2Buses);
```

#### Updated Result Message
```javascript
setTimeout(() => {
  if (next2Buses.length > 0) {
    const busText = next2Buses.length === 1 ? 'bus' : 'buses';
    let timeText = '';
    if (time === 'now') {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      timeText = formatTime(currentTime);
    } else {
      timeText = formatTime(time);
    }
    addBotMessage(`✅ Here are the next ${next2Buses.length} ${busText} departing after ${timeText}:`, 'text');
    addBotMessage('', 'buses', next2Buses);
  } else {
    addBotMessage('😔 Sorry, no buses found departing after that time.', 'text');
    addBotMessage('Would you like to try a different time or destination?', 'text');
  }
  setStep('showResults');
}, 300);
```

## How It Works

### User Flow
1. **User selects destination** (e.g., "ಮಂಗಳೂರು")
2. **User selects time** (e.g., "2:00 PM" or "Now")
3. **System filters buses**:
   - Filters all buses going to selected destination
   - Filters buses with departure time >= selected time
   - Sorts by departure time (earliest first)
   - **Takes only first 2 buses** using `slice(0, 2)`
4. **Displays results**:
   - Shows message: "✅ Here are the next 2 buses departing after [time]:"
   - Shows bus cards with details

### Example Scenarios

#### Scenario 1: User selects "2:00 PM"
- All buses to destination: 10 buses
- Buses after 2:00 PM: 6 buses
- **Result shown**: 2 buses (next 2 departures)

#### Scenario 2: User selects "Now" (current time: 10:30 AM)
- All buses to destination: 10 buses
- Buses after 10:30 AM: 8 buses
- **Result shown**: 2 buses (next 2 departures)

#### Scenario 3: Only 1 bus available
- Buses after selected time: 1 bus
- **Result shown**: 1 bus
- Message: "Here are the next 1 bus..."

#### Scenario 4: No buses available
- Buses after selected time: 0 buses
- **Result shown**: "😔 Sorry, no buses found departing after that time."

## Benefits

### 1. **Better User Experience**
- Quick, focused results
- Reduces information overload
- Shows most relevant options

### 2. **Faster Decision Making**
- Users don't have to scroll through many options
- Next 2 departures are typically all users need

### 3. **Cleaner Interface**
- Less cluttered chat window
- Easier to read and compare options

### 4. **Mobile Friendly**
- Smaller screens benefit from fewer results
- Less scrolling required

## Technical Details

### Array Slicing
```javascript
const next2Buses = filteredBuses.slice(0, 2);
```
- `slice(0, 2)` extracts first 2 elements
- If array has 0 elements: returns `[]`
- If array has 1 element: returns `[element1]`
- If array has 2+ elements: returns `[element1, element2]`

### Time Formatting
```javascript
let timeText = '';
if (time === 'now') {
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  timeText = formatTime(currentTime);
} else {
  timeText = formatTime(time);
}
```
- Handles "now" option by getting current time
- Formats time in 12-hour format with AM/PM
- Shows in user message for clarity

### Console Logging
```javascript
console.log('🚌 Next 2 buses:', next2Buses.length);
```
- Helps debugging
- Shows how many buses were selected
- Visible in browser console

## Testing Checklist

- [x] Select destination and time - shows max 2 buses
- [x] Select "Now" option - shows next 2 buses from current time
- [x] When only 1 bus available - shows 1 bus with correct message
- [x] When no buses available - shows "no buses found" message
- [x] Time is displayed correctly in result message
- [x] Bus cards show all details (name, number, departure time, schedule)
- [x] "Search Again" button resets the chat

## Future Enhancements (Optional)

### 1. Configurable Result Count
Allow users to choose how many buses to see:
```javascript
const resultCount = 2; // Could be user-configurable
const nextBuses = filteredBuses.slice(0, resultCount);
```

### 2. "Show More" Option
Add button to load more buses if needed:
```javascript
{buses.length >= 2 && hasMoreBuses && (
  <button onClick={showMoreBuses}>Show More Buses</button>
)}
```

### 3. Time Window
Show buses within a time window (e.g., next 2 hours):
```javascript
const endTime = addMinutesToTime(selectedTime, 120); // +2 hours
filteredBuses = allBuses.filter(bus => 
  bus.leavingTimeFromPerdoor >= selectedTime && 
  bus.leavingTimeFromPerdoor <= endTime
);
```

## Files Modified

1. **frontend/src/components/BusFinderChat.js**
   - Modified `searchBuses()` function
   - Updated result display logic
   - Enhanced time formatting for messages

## Deployment Notes

- No backend changes required
- No database changes required
- No new dependencies added
- Frontend hot reload will apply changes automatically
- Clear browser cache if issues occur

## Version
- **Updated**: October 19, 2025
- **Feature**: Next 2 Buses Filter
- **Component**: BusFinderChat

---

**Status**: ✅ Implemented and Ready for Testing
