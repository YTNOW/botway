package npm

import "github.com/abdfnx/botway/tools/templates"

func DockerfileContent(botName string) string {
	return templates.Content("slack", "nodejs", "npm/Dockerfile", botName)
}
