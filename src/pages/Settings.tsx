// import React from "react";

// import { type ISettings } from "../modals/settings/ISettings";
// import { useSettings } from "../hooks/useSettings";
// import Toggle from "../components/common/Toggle";
// import Checkbox from "../components/common/Checkbox";
// import FormControl from "../components/common/FormControl";

// const Settings = (): React.ReactElement => {
//   const { settingsState, setSettingsState } = useSettings();

//   const handleToggle = (
//     sectionIndex: number,
//     itemIndex: number,
//     optionIndex?: number
//   ): void => {
//     const newSettings = [...settingsState];
//     const options = newSettings[sectionIndex].items[itemIndex].options;
//     if (
//       optionIndex !== undefined &&
//       options !== undefined &&
//       options[optionIndex] !== undefined
//     ) {
//       options[optionIndex].checked = !options[optionIndex].checked;
//     } else {
//       newSettings[sectionIndex].items[itemIndex].checked =
//         !newSettings[sectionIndex].items[itemIndex].checked;
//     }
//     console.log(newSettings);
//     setSettingsState(newSettings);
//   };

//   return (
//     <div className="bg-primary">
//       <div>
//         <h1 className="bold">Settings</h1>
//         <hr />

//         {settingsState.map((section: ISettings, sectionIndex: number) => {
//           const Icon = section.Icon;
//           return (
//             <div
//               key={sectionIndex}
//               className="pt-2"
//             >
//               <h2 className="flex items-center">
//                 {section.name}&nbsp;
//                 <Icon />
//               </h2>

//               {section.items.map((item, itemIndex) => {
//                 return (
//                   <div key={itemIndex}>
//                     <label key={itemIndex}>
//                       <p>{item.label}</p>
//                       <Toggle
//                         checked={item.checked}
//                         onChange={() => {handleToggle(sectionIndex, itemIndex)}}
//                       />
//                     </label>

//                     {item.checked && item.options != null && (
//                       <div className="flex pl-2">
//                         {item.options.map((option, optionIndex) => (
//                           <FormControl
//                             key={optionIndex}
//                             label={option.label}
//                           >
//                             <Checkbox
//                               checked={option.checked}
//                               onChange={() => { handleToggle(sectionIndex, itemIndex, optionIndex)}}
//                               value={option.value}
//                             />
//                           </FormControl>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Settings;

export {};
