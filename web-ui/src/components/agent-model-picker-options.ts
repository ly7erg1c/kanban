import type { SearchSelectOption } from "@/components/search-select-dropdown";

export const AGENT_RECOMMENDED_MODEL_IDS: readonly string[] = [
	"claude-opus-4-6",
	"claude-sonnet-4-6",
	"gpt-4.1",
	"gpt-4.1-mini",
];

export const AGENT_MODEL_OPTIONS: readonly SearchSelectOption[] = [
	// Recommended
	{ value: "claude-opus-4-6", label: "Claude Opus 4.6" },
	{ value: "claude-sonnet-4-6", label: "Claude Sonnet 4.6" },
	{ value: "gpt-4.1", label: "GPT-4.1" },
	{ value: "gpt-4.1-mini", label: "GPT-4.1 Mini" },
	// Other
	{ value: "claude-haiku-4-5", label: "Claude Haiku 4.5" },
	{ value: "o4-mini", label: "o4-mini" },
	{ value: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
	{ value: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
];
